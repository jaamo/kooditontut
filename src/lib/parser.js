/**
 * Parse source string to command tree.
 */
export default function parse(source) {
    const tree = [];
    const nestedTree = [];
    const rawLines = source.split('\n');

    //  Go through each line, create line object and find parents.
    for (let i = 0; i < rawLines.length; i++) {
        let command = rawLines[i];
        let args = {};

        if (command != '') {
            // Parse repeat command.
            if (command.indexOf('repeat') != -1) {
                const iterations = command.replace('repeat ', '');
                args.iterations = parseInt(iterations);
                command = command.replace(/repeat.*/, 'repeat');
            }

            // Parse if command.
            if (command.indexOf('if ') != -1) {
                const condition = command.replace('if ', '').trim();
                args.condition = condition;
                command = command.replace(/if.*/, 'if');
            }

            // Create line.
            const line = { command: command, args: args, tree: [], id: i };

            // Find parent row based on indentation.
            const parentId = findParentLine(i, line.command, rawLines);
            line.parentId = parentId;

            // Add to tree.
            tree.push(line);
        }
    }

    // Now rebuild the array with nested structure.
    tree.map(line => addToNestedTree(nestedTree, line));

    return nestedTree;
}

function addToNestedTree(tree, lineToAdd) {
    if (lineToAdd.parentId == -1) {
        tree.push(lineToAdd);
        return;
    }
    tree.map(line => {
        if (lineToAdd.parentId == line.id) {
            lineToAdd.command = lineToAdd.command.trim();
            line.tree.push(lineToAdd);
            return;
        }
        addToNestedTree(line.tree, lineToAdd);
    });
}

/**
 *
 */
function findParentLine(currentLineId, currentLine, rawLines) {
    if (currentLineId == 0) return -1;

    const currentIndent = getIndentDepth(currentLine);

    // Scroll backwards until indentation changes.
    for (let i = currentLineId - 1; i >= 0; i--) {
        const indent = getIndentDepth(rawLines[i]);
        if (indent < currentIndent) {
            return i;
        }
    }

    return -1;
}

/**
 * Return how many spaces is used to indent.
 */
function getIndentDepth(str) {
    let indent = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            indent++;
        } else {
            break;
        }
    }
    return indent;
}
