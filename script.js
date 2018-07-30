function iframe() {
    editor.document.designMode = 'on'
}

function bold(){
    editor.document.execCommand('bold', false, null)
}

function fontSize() {
    editor.document.execCommand('fontSize', false, 7)
}