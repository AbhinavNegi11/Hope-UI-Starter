import React, { useCallback, useEffect, useRef } from "react";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import $ from "jquery";
import "datatables.net-bs5"; // Import the DataTables library


if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

interface JQueryStatic {
  DataTable?: any;
}

export default function DataTable({
  id,
  data,
  columns,
  iscolumnfilter,
  islanguagefilter,
  iscolumnhidden,
  iscolumnfooter,
  className = "",
  tableData,
}: {
  id?: any;
  data?: any;
  columns?: any;
  iscolumnfilter?: any;
  islanguagefilter?: any;
  iscolumnhidden?: any;
  iscolumnfooter?: any;
  className?: any;
  tableData?: any;
}) {
  const tableRef = useRef<HTMLTableElement | null>(null);

  const footerExits = () => {
    const tableExisted: any = tableRef.current;
    const footerExisted = tableExisted.querySelector("tfoot");

    // Check if footer already exists if exist then remove
    if (footerExisted) {
      $(footerExisted).remove();
    }
  };

  const footerCall = useCallback(() => {
    footerExits();
    const footerRow = document.createElement("tr");
    columns.forEach((column: any) => {
      const footerCell = document.createElement("th");
      const input = column.title;
      footerCell.append(input);
      footerRow.append(footerCell);
    });

    $(tableRef.current!).append($("<tfoot>").append(footerRow));
  }, [columns]);

  const columnHidden = () => {
    if ($(tableRef.current!).length) {
      const hiddentable = $(tableRef.current!).DataTable();

      if (hiddentable instanceof $["fn"]["dataTable"]) {
        // If it exists, then destroy it first
        hiddentable.destroy();
      }

      $("a.toggle-vis").on("click", function (e:any) {
        e.preventDefault();
        const column = hiddentable.column($(this).attr("data-column"));
        column.visible(!column.visible());
      });
    }
  };

  const columnFilter = useCallback(() => {
    footerExits();

    if (tableRef.current) {
      const table = $(tableRef.current!).DataTable();

      const footerRow = document.createElement("tr");
      columns.forEach((column: { title: string }) => {
        const footerCell = document.createElement("td");
        const input = document.createElement("input");
        input.type = "text";
        input.className = "form-control form-control-sm";
        input.placeholder = column.title;

        input.addEventListener("keyup", (event) => {
          if (event.target) {
            const columnIndex = columns.findIndex(
              (c: any) => c.title === column.title
            );
            const inputValue = (event.target as HTMLInputElement).value;
            table.columns(columnIndex).search(inputValue).draw();
          }
        });

        footerCell.append(input);
        footerRow.append(footerCell);
      });

      $(tableRef.current!).append($("<tfoot>").append(footerRow));
    }
  }, [columns]);

  const languageSelect = (): any => {
    const langSelector = document.querySelector(
      "#langSelector"
    ) as HTMLSelectElement | null;
    if (langSelector) {
      return Array.from(langSelector.options)
        .filter((option) => option.selected)
        .map((option) => option.getAttribute("data-path"));
    }
    return [];
  };

  const dataTableInit = () => {
    const langUrl = languageSelect();
    if (langUrl.length > 0) {
      $(tableRef.current!).DataTable({
        language: {
          url: langUrl[0],
        },
      });
    }
  };

  const destroyDataTable = () => {
    if (tableRef.current && $(tableRef.current).length) {
      $(tableRef.current).DataTable().destroy(); //if data table exist then destrot it first
      dataTableInit();
    }
  };

  const multiLanguage = () => {
    const langSelector = document.querySelector(
      "#langSelector"
    ) as HTMLSelectElement | null;
  
    if (langSelector) {
      langSelector.addEventListener("change", destroyDataTable);
    }
  };

  useEffect(() => {
    if (tableRef.current) {
      const table = $(tableRef.current).DataTable({
        autoWidth: false,
        data: data,
        columns: columns,
        dom:
          '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
        destroy: true,
        initComplete: () => {
          // Footer
          if (iscolumnfooter) {
            footerCall();
          }
          // Column filter
          if (iscolumnfilter) {
            columnFilter();
          }
          // Column Hidden
          if (iscolumnhidden) {
            columnHidden();
          }
          // Multi language
          if (islanguagefilter) {
            multiLanguage();
          }
        },
      });

      return () => {
        table.destroy();
      };
    }
  });

  return (
    <>
      <table className={"table " + className} width="100%" ref={tableRef}></table>
    </>
  );
}
