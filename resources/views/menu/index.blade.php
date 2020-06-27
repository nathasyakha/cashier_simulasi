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
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>
                        <a href="javascript:void(0)" id="add-data" class="btn btn-outline-primary pull-right" style="margin-top: 8px;">Add Menu</a>
                    </h4>
                </div>
                <!-- /.card-header -->
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

@include('menu.form')
@endsection

@push('script')
<script type="text/javascript">
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


    $('#add-data').click(function() {
        $('#saveBtn').val("Add");
        $('#id').val('');
        $('#form-menu').trigger("reset");
        $('#modaltitle').html("Add New Menu");
        $('#modal-form').modal('show');
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