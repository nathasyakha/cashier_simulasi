@extends('layouts.dashboard')

@section('content')
<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Manage Category</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                    <li class="breadcrumb-item active">Category</li>
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
                    <button type="button" onclick="add(1)" id="add-data" class="btn btn-outline-primary">Add Category</button>
                    @include('category.form')
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                    <table id="form-table" class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Category</th>
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
                url: "{{route('category.index')}}",
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
                    data: "category_name",
                    name: 'category_name',
                },
                {
                    data: 'action',
                    name: 'action'
                }
            ]
        });
    });

    window.onload = function() {
        document.getElementById("form-cat").style.display = "none";
    };

    function add(a) {
        if (a == 1) {
            document.getElementById("form-cat").style.display = "block";
            $('#saveBtn').val("Add");
            $('#form-cat').trigger("reset");
        } else {
            document.getElementById("form-cat").style.display = "block";
            $('#saveBtn').val("Put");
            $('#form-cat').trigger("reset");
        }
    }

    $(document).ready(function() {

        if ($("#form-cat").length > 0) {
            $("#form-cat").validate({

                submitHandler: function(form) {

                    var actionType = $('#saveBtn').val();
                    $('#saveBtn').html('Saving..');

                    if ($('#saveBtn').val() == 'Add') {
                        url = "{{ route('category.store') }}";
                        method = "POST";
                    } else {
                        var id = document.getElementById('id').value;
                        url = "{{url('category/update')}}" + "/" + id;
                        method = "PUT";
                    }
                    $.ajax({
                        data: $('#form-cat').serialize(),
                        url: url,
                        type: method,
                        dataType: 'json',
                        success: function(data) { //jika berhasil 
                            $('#form-cat').trigger("reset");
                            $('#saveBtn').html('Save');
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

    $(document).on('click', '.edit', function() {
        var id = $(this).data('id');
        $.ajax({
            url: "{{url('category/edit')}}" + "/" + id,
            type: "GET",
            dataType: "JSON",
            success: function(data) {
                $('#id').val(data.id);
                $('#category_name').val(data.category_name);
            }
        })
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
                    url: "{{ url('category/delete') }}" + '/' + id,
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
                Swal.fire('Delete Cancelled');
            }
        });
    });
</script>
@endpush