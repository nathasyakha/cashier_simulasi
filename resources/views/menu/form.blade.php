<div class="modal fade" id="modal-form" tabindex="1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form id="form-menu" method="post" class="form-horizontal" data-toggle="validator" enctype="multipart/form-data">
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
                        <label for="category_id" class="col-md-3 control-label">Category</label>
                        <div class="col-md-6">
                            <select type="text" id="category_id" name="category_id" class="form-control" autofocus required>
                                <option value="0" disable="true" selected="true">=== Choose Category ===</option>
                                @foreach ($category as $key => $row)
                                <option value="{{$row->id}}">{{$row->category_name}}</option>
                                @endforeach
                            </select>
                            <span class="help-block with-errors"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="menu_name" class="col-md-3 control-label">Name</label>
                        <div class="col-md-6">
                            <input type="text" id="menu_name" name="menu_name" class="form-control" autofocus required>
                            <span class="help-block with-errors"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="price" class="col-md-3 control-label">Price</label>
                        <div class="col-md-6">
                            <input type="text" id="price" name="price" class="form-control" autofocus required>
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