const vscode = require("vscode");
const OpenAI = require("openai-api");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  vscode.window.showInformationMessage(
    "OpenAI Codex Autocomplete has been Activated."
  );

  let OPENAI_API_KEY = context.workspaceState.get("@codex.key", "");

  async function setApiKey() {
    let key = await vscode.window.showInputBox({
      password: true,
      title: "OpenAI API key",
      prompt: "Enter API Key here...",
    });
    context.workspaceState.update("@codex.key", key);
    OPENAI_API_KEY = context.workspaceState.get("@codex.key", "");
    return true;
  }

  if (!OPENAI_API_KEY) {
    vscode.window.showInformationMessage(
      "API Key Required to use OpenAI Codex"
    );
    setApiKey();
  }

  // SetToken Function
  context.subscriptions.push(
    vscode.commands.registerCommand("openai-codex.setToken", async () => {
      setApiKey();
    })
  );

  // AutoComplete Function
  context.subscriptions.push(
    vscode.commands.registerCommand("openai-codex.autocomplete", async () => {
      // Get API Key from Globalstate
      if (!OPENAI_API_KEY) {
        await setApiKey();
      }
      const openai = new OpenAI(OPENAI_API_KEY);

      let editor = vscode.window.activeTextEditor;
      let selection = editor.selection;
      let activeCursor = editor.selection.active;
      let text = editor.document.getText(selection);

      const completion = await openai.complete({
        engine: "davinci",
        prompt: text,
        maxTokens: 100,
      });

      editor.edit((editBuilder) => {
        editBuilder.insert(activeCursor, completion.data.choices[0].text);
      });
    })
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
