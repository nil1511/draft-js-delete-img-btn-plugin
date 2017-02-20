# DraftJS Delete Image Button Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

Usage:

```js
import createDeleteImgPlugin from 'draft-js-delete-img-btn-plugin';

const deleteImgPlugin = createDeleteImgPlugin();
const { DeleteImgBtn } = deleteImgPlugin;

// Add DeleteImgBtn after editore as
<div>
  <Editor
    editorState={this.state.editorState}
    onChange={this.onChange}
    plugins={plugins}
  />
  <DeleteImgBtn />
</div>

```

Dependencies:

This plugin requires that the `draft-js-focus-plugin`;

> Forked from draft-js-alignment-plugin
