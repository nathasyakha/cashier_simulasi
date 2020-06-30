@extends('layouts.dashboard')

@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Manage Menu</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                    <li class="breadcrumb-item active">Menu</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>


<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    @include('menu.form')
                </div>
            </div>
        </div>

        <div class="col-6">
            <div class="card">
                <div class="card-body">
                    <table id="form-table" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>


@endsection

@push('script')
<script type="text/javascript">
    $('.addRow').on('click', function() {
        addRow();
    });

    function addRow() {
        var tr = '<tr>' +
            ' <td> <select type="text" name="ingredient_id[]" id="ingredient_id" class="form-control ingredient_id" autofocus required>' +
            ' <option value="0" disable="true" selected="true">=== Choose Ingredient ===</option>' +
            '@foreach ($ingredient as $key => $row)' +
            ' <option value="{{$row->id}}">{{$row->ing_name}}</option>' +
            '@endforeach' +
            ' </select>' +
            ' <span class="help-block with-errors"></span></td>' +
            ' <td> <input type="text" name="qty[]" id="qty" class="form-control qty" autofocus required>' +
            ' <span class="help-block with-errors"></span></td>' +
            ' <td> <input type="text" name="unit[]" id="unit" class="form-control unit" readonly style="background-color: gainsboro;">' +
            ' <span class="help-block with-errors"></span></td>' +
            '<td><a href="#" class="btn btn-danger remove"><i class="far fa-trash-alt"></i></a></td>' +
            '</tr>';
        $('#recipe tbody').append(tr);
    };

    $(document).on('click', '.remove', function() {
        var last = $('#recipe tbody tr').length;
        if (last == 1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You can not remove last row!',
            })
        } else {
            $(this).parents('#recipe tr').remove();
        }
    });

    $(function() {
        $(document).on('change', '#ingredient_id', function() {
            var ingredient_id = $(this).val();
            $.ajax({
                url: "{{route('get-unit')}}",
                type: "GET",
                data: {
                    ingredient_id: ingredient_id
                },
                success: function(data) {
                    $('#unit').val(data);
                }
            });
        });
    });



    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $(document).ready(function() {
        $('#form-table').DataTable({
            proccessing: false,
            serverSide: true,
            responsive: true,
            autoWidth: false,
            ajax: {
                url: "{{route('menu.index')}}",
                type: 'GET',
            },
            order: [
                [1, "asc"]
            ],
            columns: [{
                    data: 'DT_RowIndex',
                    name: 'no',
                    orderable: false,
                    width: '3%'
                },
                {
                    data: 'category_name',
                    name: 'categories.category_name',
                },
                {
                    data: "menu_name",
                    name: 'menus.menu_name',
                },
                {
                    data: 'price',
                    name: 'menus.price',
                },
                {
                    data: 'action',
                    name: 'action'
                }
            ]
        });
    });


    $(document).on('click', '.edit', function() {
        var id = $(this).data('id');
        $.ajax({
            url: "{{url('menu/edit')}}" + "/" + id,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                $('#id').val(data.id);
                $('#category_id').val(data.category_id);
                $('#menu_name').val(data.menu_name);
                $('#price').val(data.price);
                $('#ingredient_id').val(data.ingredient_id);
                $('#qty').val(data.qty);
                $('#unit').val(data.unit);

                $('#modaltitle').html("Edit Menu");
                $('#saveBtn').val("Edit");
                $('#modal-form').modal('show');
            }
        })
    });

    $(document).ready(function() {

        if ($("#form-menu").length > 0) {
            $("#form-menu").validate({

                submitHandler: function(form) {

                    var actionType = $('#saveBtn').val();
                    $('#saveBtn').html('Saving..');

                    if ($('#saveBtn').val() == 'Add') {
                        url = "{{ route('menu.store') }}";
                        method = "POST";
                    } else {
                        var id = document.getElementById('id').value;
                        url = "{{url('menu/update')}}" + "/" + id;
                        method = "PUT";
                    }
                    $.ajax({
                        data: $('#form-menu').serialize(),
                        url: url,
                        type: method,
                        dataType: 'json',
                        success: function(data) { //jika berhasil 
                            $('#form-menu').trigger("reset");
                            $('#modal-form').modal('hide');
                            $('#saveBtn').html('Saved');
                            var oTable = $('#form-table').dataTable();
                            oTable.fnDraw(false); //reset datatable
                            Swal.fire(
                                'Done!',
                                'Data Saved Successfully!',
                                'success')
                        },
                        error: function(data) {
                            console.log('Error:', data);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                            })
                        }
                    });

                }
            })
        };
    });

    $(document).on('click', '.delete', function() {
        Swal.fire({
            title: 'Are you sure ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                var id = $(this).data('id');
                $.ajax({
                    type: "DELETE",
                    url: "{{ url('menu/delete') }}" + '/' + id,
                    success: function(data) {
                        var oTable = $('#form-table').dataTable();
                        oTable.fnDraw(false);
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    },
                    error: function(data) {
                        console.log('Error:', data);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                    }
                });
            } else {
                Swal.fire('Your data is safe');
            }
        });
    });
</script>
@endpush