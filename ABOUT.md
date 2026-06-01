### Sankey Chart Demo

This demo showcases a Sankey chart using VisuallyJS in an Angular application.

#### How it works

The application uses the `vjs-sankey-chart` component to visualize flow data from a JSON dataset. It allows for dynamic pivoting of the data to explore different flow relationships.

#### Components Used

- `vjs-sankey-chart`: The specialized component for rendering Sankey diagrams.

#### Component Options

The `vjs-sankey-chart` accepts `options` of type `SankeyOptions`:
- `linkColorStrategy`: Set to `"source-target"` to color links based on their source and target nodes.
- `labelProperty`: Specifies which property in the data to use for labels (e.g., `"name"`).
- `labels`: Configures label styling like padding and background color.
- `tooltipSuffix`: Appends a unit (e.g., `"TWh"`) to the flow values in tooltips.

The `pivot` property allows the component to reorganize the flow based on selected data dimensions.

#### Stylesheets

For the VisuallyJS components to render correctly, the following stylesheets must be included in the project (usually in `styles.css`):

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
@import "@visuallyjs/browser-ui-angular/css/visuallyjs-angular.css";
```
