<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Hello React</title>
    <script type="text/javascript" src="vendor/react.js"></script>
    <script type="text/javascript" src="vendor/showdown.min.js"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-1.10.0.min.js"></script>
</head>
<body>
<div id="content">${content}</div>
<script type="text/javascript" src="commentBox.js"></script>
<script type="text/javascript" src="square.js"></script>
<script type="text/javascript">
    $(function () {
        renderClient(${data});
    });
</script>
</body>
</html>