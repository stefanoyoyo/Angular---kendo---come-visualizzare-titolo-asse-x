import { Component } from "@angular/core";
import { PlotBand } from "@progress/kendo-angular-charts";
import { jobsData } from "./jobs-data";

@Component({
  selector: "my-app",
  template: `
    <kendo-chart>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="bubble"
          [data]="data"
          xField="x"
          yField="y"
          sizeField="size"
          categoryField="category"
        >
        </kendo-chart-series-item>

        <kendo-chart-x-axis>
          <kendo-chart-x-axis-item
            [axisCrossingValue]="[0, 100]"
            [min]="-100"
            [max]="100"
            [reverse]="true"
          >
            <kendo-chart-x-axis-item-labels rotation="auto">
            </kendo-chart-x-axis-item-labels>
          </kendo-chart-x-axis-item>
          <kendo-chart-x-axis-item
            [labels]="{ visible: false }"
            [title]="{ text: 'x axis title' }"
          >
          </kendo-chart-x-axis-item>
        </kendo-chart-x-axis>
        <kendo-chart-y-axis>
          <kendo-chart-y-axis-item
            [axisCrossingValue]="[0, 100]"
            [min]="-100"
            [max]="100"
            [reverse]="true"
          >
          </kendo-chart-y-axis-item>
          <kendo-chart-y-axis-item
            [labels]="{ visible: false }"
            [title]="{ text: 'y axis title' }"
          >
          </kendo-chart-y-axis-item>
        </kendo-chart-y-axis>
        <kendo-chart-legend [visible]="false"> </kendo-chart-legend>
      </kendo-chart-series>
    </kendo-chart>
  `
})
export class AppComponent {
  public data: any[] = jobsData;
  public xPlotBands: PlotBand[] = [
    {
      from: -5000,
      to: 0,
      color: "#00f",
      opacity: 0.05
    }
  ];
}
