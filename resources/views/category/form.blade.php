<form action="{{route('category.store')}}" method="POST" id="form-cat" class="form-inline" style="margin-top: 20px;">
    @csrf
    <input type="hidden" id="id" name="id">
    <div class="form-group mx-sm-3 mb-2">
        <input type="text" class="form-control" id="category_name" name="category_name" placeholder="Add Category" autofocus required>
        <span class="help-block with-errors"></span>
    </div>
    <div class="form-group mx-sm-3 mb-2">
        <button type="submit" class="btn btn-primary" id="saveBtn">Save</button>
    </div>
</form>