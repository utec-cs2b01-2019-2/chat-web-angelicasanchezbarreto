$(function(){
    var url = "/users";

    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url ,
            insertUrl: url ,
            updateUrl: url ,
            deleteUrl: url ,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        remoteOperations: {
            sorting: true,
            paging: true
        },
        paging: {
            pageSize: 12
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 12, 20]
        },
        columns: [{
                dataField: "id",
                dataType: "number",
                allowEditing: false},

                {dataField: "username",
                dataType: "text",
                allowEditing: true},

                {dataField: "name",
                dataType: "text",
                allowEditing: true},

                {dataField: "fullname",
                dataType: "text",
                allowEditing: true},

                {dataField: "password",
                dataType: "text",
                allowEditing: true}
                ]
                        }).dxDataGrid("instance");
            });
