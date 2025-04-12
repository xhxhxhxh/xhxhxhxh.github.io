import{_ as e,c as d,o as n,ah as r}from"./chunks/framework.B3ht97ba.js";const x=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"guide/api.md","filePath":"en/guide/api.md"}'),l={name:"guide/api.md"};function a(i,t,s,c,o,g){return n(),d("div",null,t[0]||(t[0]=[r('<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th></tr></thead><tbody><tr><td style="text-align:center;">getRowId</td><td style="text-align:center;">return row&#39;s id</td><td style="text-align:center;"><code>() =&gt; string</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">rows</td><td style="text-align:center;">row data</td><td style="text-align:center;"><code>RowData[]</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">columns</td><td style="text-align:center;">table columns, refer to <a href="https://www.ag-grid.com/archive/30.0.6/vue-data-grid/" target="_blank" rel="noreferrer">ag-grid</a> v30.0.6</td><td style="text-align:center;"><code>ColDef[]</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">defaultCol</td><td style="text-align:center;">a default column definition. Items defined in the actual column definitions get precedence.</td><td style="text-align:center;"><code>DefaultColDef</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">rowHeight</td><td style="text-align:center;">every row&#39;s height</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">25</td></tr><tr><td style="text-align:center;">headerHeight</td><td style="text-align:center;">table and gantt view header height</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">25</td></tr><tr><td style="text-align:center;">rowBuffer</td><td style="text-align:center;">the number of rows rendered outside the viewable area the gantt renders</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">5</td></tr><tr><td style="text-align:center;">rowSelection</td><td style="text-align:center;">row selection</td><td style="text-align:center;"><code>single / multiple / none</code></td><td style="text-align:center;">multiple</td></tr><tr><td style="text-align:center;">defaultTableViewWidth</td><td style="text-align:center;">table view width</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">350</td></tr><tr><td style="text-align:center;">maxTableViewWidth</td><td style="text-align:center;">max table view width</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">1000</td></tr><tr><td style="text-align:center;">defaultPerHourSpacing</td><td style="text-align:center;">per hour spacing</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0.1</td></tr><tr><td style="text-align:center;">defaultTimeScale</td><td style="text-align:center;">time scale</td><td style="text-align:center;"><code>day / week / month / quarter/ year</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">styleOption</td><td style="text-align:center;">gantt global style option</td><td style="text-align:center;"><code>GanttStyleOption</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">defaultShowFirstLevel</td><td style="text-align:center;">show gantt first level header</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">locale</td><td style="text-align:center;">internationalization</td><td style="text-align:center;"><code>en / zh-cn</code></td><td style="text-align:center;">browser&#39;s language</td></tr><tr><td style="text-align:center;">timePointComp</td><td style="text-align:center;">time point component</td><td style="text-align:center;"><code>Comp</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">getEmptyRows</td><td style="text-align:center;">return rows data</td><td style="text-align:center;"><code>(count: number) =&gt; RowData[]</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">timeLineRender</td><td style="text-align:center;">custom time line component</td><td style="text-align:center;"><code>Comp</code></td><td style="text-align:center;">—</td></tr><tr><td style="text-align:center;">timeLineRenderParams</td><td style="text-align:center;">time line component params</td><td style="text-align:center;"><code>Record&lt;string, any&gt;</code></td><td style="text-align:center;">—</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th><th style="text-align:center;">Type</th></tr></thead><tbody><tr><td style="text-align:center;">select-change</td><td style="text-align:center;">triggers when user clicks the row</td><td style="text-align:center;"><code>(selectedIds: string[]) =&gt; void</code></td></tr><tr><td style="text-align:center;">expand-change</td><td style="text-align:center;">triggers when user expands or collapses a row</td><td style="text-align:center;"><code>(unExpandRowIds: string[]) =&gt; void</code></td></tr><tr><td style="text-align:center;">row-context-menu</td><td style="text-align:center;">triggers when user right clicks the row</td><td style="text-align:center;"><code>(e: MouseEvent, rowId?: string | null) =&gt; void</code></td></tr><tr><td style="text-align:center;">cell-double-clicked</td><td style="text-align:center;">triggers when user double clicks the row</td><td style="text-align:center;"><code>(rowData: RowData | undefined, columnData?: ColDef) =&gt; void</code></td></tr><tr><td style="text-align:center;">gantt-mouse-down</td><td style="text-align:center;">triggers when user mouse down the row</td><td style="text-align:center;"><code>(e: MouseEvent, rowId?: string | null) =&gt; void</code></td></tr><tr><td style="text-align:center;">time-point-move-finished</td><td style="text-align:center;">triggers after a time point has moved</td><td style="text-align:center;"><code>(timePoint: TimePoint, date: dayjs.Dayjs) =&gt; void</code></td></tr><tr><td style="text-align:center;">per-hour-spacing-change</td><td style="text-align:center;">triggers when time has scaled</td><td style="text-align:center;"><code>(perHourSpacing: number) =&gt; void</code></td></tr><tr><td style="text-align:center;">time-point-context-menu</td><td style="text-align:center;">triggers when right click a time point</td><td style="text-align:center;"><code>(e: MouseEvent, timePoints: TimePoint[], rowData?: RowData) =&gt; void</code></td></tr><tr><td style="text-align:center;">time-line-stretch-change</td><td style="text-align:center;">triggers after a time line has stretched</td><td style="text-align:center;"><code>(rowId: string, timeLineIds: string[], startDate: dayjs.Dayjs | null, endDate: dayjs.Dayjs | null) =&gt; void</code></td></tr><tr><td style="text-align:center;">time-line-move-change</td><td style="text-align:center;">triggers after a time line has moved</td><td style="text-align:center;"><code>(rowId: string, timeLineIds: string[], movedTimeData: MovedTimeLineData[]) =&gt; void</code></td></tr><tr><td style="text-align:center;">view-port-changed</td><td style="text-align:center;">which rows are rendered in the DOM has changed</td><td style="text-align:center;"><code>(data: RowData[]) =&gt; void | Promise&lt;void&gt;</code></td></tr></tbody></table><h2 id="exposes" tabindex="-1">Exposes <a class="header-anchor" href="#exposes" aria-label="Permalink to &quot;Exposes&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">Method</th><th style="text-align:center;">Description</th><th style="text-align:center;">Type</th></tr></thead><tbody><tr><td style="text-align:center;">getRowNode</td><td style="text-align:center;">get row node by id</td><td style="text-align:center;"><code>(id: string) =&gt; GanttRowNode&lt;RowData&gt; | undefined</code></td></tr><tr><td style="text-align:center;">getRowNodeChildren</td><td style="text-align:center;">get row&#39;s children row nodes</td><td style="text-align:center;"><code>(parentId?: string) =&gt; GanttRowNode&lt;RowData&gt;[]</code></td></tr><tr><td style="text-align:center;">getRowDataList</td><td style="text-align:center;">get rows original data</td><td style="text-align:center;"><code>() =&gt; RowData[]</code></td></tr><tr><td style="text-align:center;">freshRowNodes</td><td style="text-align:center;">refresh rows which have been updated</td><td style="text-align:center;"><code>(rows: RowData[]) =&gt; void</code></td></tr><tr><td style="text-align:center;">refreshCells</td><td style="text-align:center;">refresh row&#39;s cell</td><td style="text-align:center;"><code> (ids: string[], force?: boolean) =&gt; void</code></td></tr><tr><td style="text-align:center;">getDisplayRows</td><td style="text-align:center;">get rows which rendered in the DOM</td><td style="text-align:center;"><code>() =&gt; RowData[] | null</code></td></tr><tr><td style="text-align:center;">expandAll</td><td style="text-align:center;">expand all rows</td><td style="text-align:center;"><code>() =&gt; void</code></td></tr><tr><td style="text-align:center;">freshTimeLines</td><td style="text-align:center;">refresh time lines when time points have been updated</td><td style="text-align:center;"><code>(rowIds: string[]) =&gt; void</code></td></tr><tr><td style="text-align:center;">selectRows</td><td style="text-align:center;">select rows by id</td><td style="text-align:center;"><code>(ids: string[]) =&gt; void</code></td></tr></tbody></table>',7)]))}const h=e(l,[["render",a]]);export{x as __pageData,h as default};
