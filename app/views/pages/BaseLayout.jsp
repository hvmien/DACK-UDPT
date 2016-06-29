<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>  

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>

    <meta name="viewport" content="width=device-width" />
    <title> <tiles:getAsString name  = "tile" /> </title>
    <!-- Google Fonts -->
    <link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,200,300,700,600' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,100' rel='stylesheet' type='text/css'>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="Content/css/bootstrap.min.css" type='text/css'>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="Content/css/font-awesome.min.css" type='text/css'>

    <!-- Custom CSS -->
    <link rel="stylesheet" href="Content/css/owl.carousel.css" type='text/css'>
    <link rel="stylesheet" href="Content/css/style.css" type='text/css'>
    <link rel="stylesheet" href="css/responsive.css" type='text/css'>
    <link href="Content/css/style1.css" rel="stylesheet" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="script.js"></script>
</head>
<body>
	
	<%@ include file = "Header.jsp" %>
	<%@ include file = "MainMenu.jsp" %>
	<tiles:insertAttribute name = "body"/>
	<%@ include file="Footer.jsp" %>
</body>
</html>
	