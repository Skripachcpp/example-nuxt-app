// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt({
  rules: {
    semi: ["error", "never"],
    "vue/multi-word-component-names": "off",
  },
})
