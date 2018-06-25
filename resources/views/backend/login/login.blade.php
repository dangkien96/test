<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel - ReactJS - Nifty 2.*</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link href="{{ url('Nifty') }}/css/nifty.min.css" rel="stylesheet">
        <link href="{{ url('css/plugin/validateFormik.css') }}" rel="stylesheet">
        <!-- Nifty front awesome -->
        <link href="{{ url('Nifty/plugins/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
        <!-- Nifty datepicker -->
        <link href="{{ url('Nifty/plugins/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet">
        <script type="text/javascript">
            baseUrl = '{{ url("") }}';
            window.Laravel = {!! json_encode([
                'baseUrl' => url('/'),
                'csrfToken' => csrf_token(),
            ]) !!};
        </script>
    </head>
    <body>
        <div id="container" class="cls-container">
            <div id="bg-overlay"></div>
            <div class="cls-content">
                <div id="example"></div>
            </div>
        </div>
        <!--jQuery [ REQUIRED ]-->
        <script src="{{ url('') }}/Nifty/js/jquery.min.js"></script>

        <!--BootstrapJS [ RECOMMENDED ]-->
        <script src="{{ url('') }}/Nifty/js/bootstrap.min.js"></script>
        <script src="{{ url('') }}/Nifty/plugins/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
        <script src="{{ url('') }}/Nifty/plugins/momentjs/moment.min.js"></script>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
        <script src="{{ url('Nifty') }}/js/nifty.min.js"></script>
    </body>
</html>
