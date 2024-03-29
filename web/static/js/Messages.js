$(function(){
    var url = "/messages";
    var url_users ="/users"
    $("#grid").dxDataGrid({
        dataSource: DevExpress.data.AspNet.createStore({
            key: "id",
            loadUrl: url,
            insertUrl: url,
            updateUrl: url,
            deleteUrl: url,
            onBeforeSend: function(method, ajaxOptions) {
                ajaxOptions.xhrFields = { withCredentials: true };
            }
        }),
        editing: {
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true
        },
        remoteOperations: true,
        columns: [{
                dataField: "id",
                dataType: "number",
                allowEditing: false},

                {dataField: "content",
                //dataType: "text",
                allowEditing: true},

                {dataField: "sent_on",
                dataType: "datetime",
                format: "MM/dd/yyyy hh:mm",
                allowEditing: false},

                {dataField: "user_from_id",
                lookup: {
                        dataSource: DevExpress.data.AspNet.createStore
                        ({
                            key: "id",
                            loadUrl: url_users,
                            onBeforeSend: function(method, ajaxOptions) {
                                ajaxOptions.xhrFields = { withCredentials: true };
                            }
                        }),
                        valueExpr: "id",
                        displayExpr: "username"
                        }
                 },
                {dataField: "user_to_id",
                lookup: {
                        dataSource: DevExpress.data.AspNet.createStore
                        ({
                            key: "id",
                            loadUrl: url_users,
                            onBeforeSend: function(method, ajaxOptions) {
                                ajaxOptions.xhrFields = { withCredentials: true };
                            }
                        }),
                        valueExpr: "id",
                        displayExpr: "username"
                        }
                }
                ]

                            }).dxDataGrid("instance");

            });
