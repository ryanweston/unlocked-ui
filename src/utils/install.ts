export const installComponent = (Components: any) => {
  Components.install = (app: any): void => {
    for (const componentKey in Components) {
      console.log(componentKey)
      console.log(Components)
      const component = Components[componentKey]
      app.component(component.name as string, component)
    }
  }

  return Components
}