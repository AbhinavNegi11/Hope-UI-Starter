// custom.d.ts
import { DataTablesApi } from 'datatables.net-bs5';

// Extend the JQueryStatic interface to add the DataTable property
interface JQueryStatic {
  DataTable: DataTablesApi;
}

// Extend the Window interface to add the '$' and 'jQuery' properties
declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}