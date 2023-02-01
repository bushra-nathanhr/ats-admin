export { default as Footer } from '../..\\components\\Footer\\index.vue'
export { default as DashboardFilters } from '../..\\components\\Dashboard\\Filters.vue'
export { default as ReportsReportViewListCard } from '../..\\components\\Reports\\ReportViewListCard.vue'
export { default as UtilsCustomInputContainer } from '../..\\components\\utils\\CustomInputContainer.vue'
export { default as UtilsFileDropzone } from '../..\\components\\utils\\FileDropzone.vue'
export { default as UtilsInput } from '../..\\components\\utils\\Input.vue'
export { default as UtilsMainTable } from '../..\\components\\utils\\MainTable.vue'
export { default as UtilsSnackBar } from '../..\\components\\utils\\SnackBar.vue'
export { default as WIPTheme } from '../..\\components\\WIP\\theme.vue'
export { default as DashboardOverviewTotalsViewer } from '../..\\components\\Dashboard\\OverviewTotalsViewer\\index.vue'
export { default as GraphsLineGraph } from '../..\\components\\Graphs\\LineGraph\\index.vue'
export { default as CardsCardWithIcon } from '../..\\components\\Cards\\CardWithIcon\\index.vue'
export { default as LayoutAccountsDropDownMenu } from '../..\\components\\Layout\\AccountsDropDownMenu\\index.vue'
export { default as LayoutHeaderTabs } from '../..\\components\\Layout\\HeaderTabs\\index.vue'
export { default as CardsTotalsCard } from '../..\\components\\Cards\\TotalsCard\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
