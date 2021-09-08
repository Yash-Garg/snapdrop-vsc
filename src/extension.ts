import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    console.log("snapdrop-vsc is now active!");

    let disposable = vscode.commands.registerCommand(
        "snapdrop-vsc.launch",
        () => {
            const webview = vscode.window.createWebviewPanel(
                "sdrop",
                "SnapDrop",
                vscode.ViewColumn.One,
                { enableScripts: true }
            );

            webview.webview.html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SnapDrop</title>
            </head>
                <body>
				    <iframe src="https://snapdrop.net/" style="width: 100%; height: 100vh" frameborder="0" />
			    </body>
		    </html>
            `;
        }
    );

    context.subscriptions.push(disposable);
}

export function deactivate() {}
