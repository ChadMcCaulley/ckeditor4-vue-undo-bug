<template>
  <div id="app">
    <ckeditor v-model="editor1Value" :config="editorConfig"></ckeditor>
    <ckeditor v-model="editor2Value" :config="editor2Config"></ckeditor>
  </div>
</template>

// If you want to use this template, please follow the following steps: // 1.
Fork it. // 2. Add your code here, e.g. custom plugins. // 3. If you want to
change the default ckeditor4-vue version, you can do it in the sidebar on the
left, inside "Dependencies" section via dropdown.

<script>
export default {
  name: "App.vue",
  data: () => ({
    editor1Value: "",
    editor2Value: "",
    editorConfig: {
      removePlugins: "elementspath,exportpdf,magicline,resize,justify",
      extraPlugins: ["divarea", "stylesheetparser", "sourcearea"],
      toolbar: [
        {
          items: [
            "Source",
            "-",
            "Bold",
            "Italic",
            "RemoveFormat",
            "-",
            "SpecialChar",
          ],
        },
      ],
    },
    editor2Config: {
      removePlugins: "elementspath,exportpdf,magicline,resize,justify",
      extraPlugins: ["divarea", "stylesheetparser", "sourcearea"],
      toolbar: [
        {
          items: [
            "Source",
            "-",
            "Bold",
            "Italic",
            "RemoveFormat",
            "-",
            "SpecialChar",
          ],
        },
      ],
    },
  }),
};
</script>
