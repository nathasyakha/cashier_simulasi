<div class="modal fade" id="modal-form" tabindex="1" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form id="form-invoice" method="post" class="form-horizontal" data-toggle="validator" enctype="multipart/form-data">
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
                                    <select type="text" id="menu_id" name="menu_id[]" class="form-control menu_id" autofocus required>
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
                                <td colspan="2"><input type="text" id="total_amount" name="total_amount" class="form-control total_amount" value="0" readonly style="background-color: gainsboro;">
                                    <span class="help-block with-errors"></span></td>
                            </tr>
                            <tr>
                                <th colspan="3" style="text-align: center;"> Paid Amount </th>
                                <td colspan="2"><input type="text" id="paid_amount" name="paid_amount" class="form-control paid_amount" placeholder="0">
                                    <span class="help-block with-errors"></span></td>
                            </tr>
                            <tr>
                                <th colspan="3" style="text-align: center;"> Due Amount </th>
                                <td colspan="2"><input type="text" id="due_amount" name="due_amount" class="form-control due_amount" value="0" readonly style="background-color: gainsboro;">
                                    <span class="help-block with-errors"></span></td>
                            </tr>
                            <tr>
                                <td colspan="5"><button type="submit" id="saveBtn" class="btn btn-success btn-sm btn-block">Save</button></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </form>
        </div>
    </div>
</div>