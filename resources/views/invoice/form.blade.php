<form action="{{route('invoice.store')}}" method="POST">
    @csrf
    <input type="hidden" id="id" name="id">
    <div class="form-group">
        <label for="date" class="col-md-3 control-label">Date</label>
        <div class="col-md-12">
            <input type="date" id="date" name="date" class="form-control" autofocus required>
            <span class="help-block with-errors"></span>
        </div>
    </div>

    <table id="invoice" class="table table-bordered table-hover">
        <thead style="text-align: center">
            <tr>
                <th>Menu</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th><a href="#" class="addRow"> <i class="fas fa-plus"></i></a></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <select type="text" id="menu_id" name="menu_id[]" class="form-control" autofocus required>
                        <option value="0" disable="true" selected="true">=== Choose Menu ===</option>
                        @foreach ($menu as $key => $row)
                        <option value="{{$row->id}}">{{$row->menu_name}}</option>
                        @endforeach
                    </select>
                    <span class="help-block with-errors"></span>
                </td>
                <td> <input type="text" id="quantity" name="quantity[]" class="form-control quantity" placeholder="0" autofocus required>
                    <span class="help-block with-errors"></span></td>
                <td> <input type="text" id="price" name="price[]" class="form-control price" value="0" readonly style="background-color: gainsboro;">
                    <span class="help-block with-errors"></span></td>
                <td> <input type="text" id="subtotal" name="subtotal[]" value="0" class="form-control subtotal" readonly style="background-color: gainsboro;">
                    <span class="help-block with-errors"></span></td>
                <td style="text-align: center;">
                    <a href="#" class="btn btn-danger btn-sm remove"><i class="far fa-trash-alt"></i></a>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th colspan="3" style="text-align: center;"> Total Amount </th>
                <td colspan="2"><input type="text" id="totalAmount" name="totalAmount" class="form-control totalAmount" value="0" readonly style="background-color: gainsboro;">
                    <span class="help-block with-errors"></span></td>
            </tr>
            <tr>
                <th colspan="3" style="text-align: center;"> Paid Amount </th>
                <td colspan="2"><input type="text" id="paidAmount" name="paidAmount" class="form-control paidAmount" value="0">
                    <span class="help-block with-errors"></span></td>
            </tr>
            <tr>
                <th colspan="3" style="text-align: center;"> Due Amount </th>
                <td colspan="2"><input type="text" id="dueAmount" name="dueAmount" class="form-control dueAmount" value="0" readonly style="background-color: gainsboro;">
                    <span class="help-block with-errors"></span></td>
            </tr>
            <tr>
                <td colspan="5"><input type="submit" name="" value="Save" class="btn btn-success btn-sm btn-block"></td>
            </tr>
        </tfoot>
    </table>
</form>