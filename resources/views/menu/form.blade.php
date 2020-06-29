<form action="{{route('menu.store')}}" method="POST">
    @csrf
    <input type="hidden" id="id" name="id">
    <div class="form-group">
        <label for="category_id" class="col-md-3 control-label">Category</label>
        <div class="col-12">
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
        <div class="col-md-12">
            <input type="text" id="menu_name" name="menu_name" class="form-control" autofocus required>
            <span class="help-block with-errors"></span>
        </div>
    </div>

    <div class="form-group">
        <label for="price" class="col-md-3 control-label">Price</label>
        <div class="col-md-12">
            <input type="text" id="price" name="price" class="form-control" autofocus required>
            <span class="help-block with-errors"></span>
        </div>
    </div>

    <table id="recipe" class="table table-bordered table-hover">
        <thead style="text-align: center">
            <tr>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th><a href="#" class="addRow"> <i class="fas fa-plus"></i></a></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <select type="text" name="ingredient_id[]" id="ingredient_id" class="form-control ingredient_id" autofocus required>
                        <option value="0" disable="true" selected="true">=== Choose Ingredient ===</option>
                        @foreach ($ingredient as $key => $row)
                        <option value="{{$row->id}}">{{$row->ing_name}}</option>
                        @endforeach
                    </select>
                    <span class="help-block with-errors"></span>
                </td>
                <td> <input type="text" name="qty[]" id="qty" class="form-control qty" autofocus required>
                    <span class="help-block with-errors"></span></td>
                <td> <input type="text" name="unit[]" id="unit" class="form-control unit" readonly style="background-color: gainsboro;">
                    <span class="help-block with-errors"></span></td>
                <td>
                    <a href="#" class="btn btn-danger remove"><i class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td style="border: none"></td>
                <td style="border: none"></td>
                <td style="border: none"></td>
                <td><input type="submit" name="" value="Save" class="btn btn-success"></td>
            </tr>
        </tfoot>
    </table>
</form>