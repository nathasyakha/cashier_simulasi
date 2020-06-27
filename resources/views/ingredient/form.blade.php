<div class="modal fade" id="modal-form" tabindex="1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form id="form-ing" method="post" class="form-horizontal" data-toggle="validator" enctype="multipart/form-data">
                @csrf
                <div class="modal-header">
                    <h3 class="modal-title" id="modaltitle"></h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"> &times; </span>
                    </button>
                </div>

                <div class="modal-body">
                    <input type="hidden" id="id" name="id">
                    <div class="form-group">
                        <label for="ing_name" class="col-md-3 control-label">Name</label>
                        <div class="col-md-6">
                            <input type="text" id="ing_name" name="ing_name" class="form-control" autofocus required>
                            <span class="help-block with-errors"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="stock" class="col-md-3 control-label">Stock</label>
                        <div class="col-md-6">
                            <input type="text" id="stock" name="stock" class="form-control" autofocus required>
                            <span class="help-block with-errors"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="unit" class="col-md-3 control-label">Unit</label>
                        <div class="col-md-6">
                            <input type="text" id="unit" name="unit" class="form-control" autofocus required>
                            <span class="help-block with-errors"></span>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="submit" id="saveBtn" class="btn btn-primary">Submit</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>

            </form>
        </div>
    </div>
</div>