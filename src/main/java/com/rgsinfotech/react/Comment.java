package com.rgsinfotech.react;

public class Comment {
	private String author;
	private String text;
	private Integer squareable;

	public Comment() {

	}

	public Comment(String author, String text) {
		this.author = author;
		this.text = text;
	}

	public Comment(String author, String text, Integer squareable) {
		this(author, text);
		this.squareable = squareable;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Integer getSquareable() {
		return squareable;
	}

	public void setSquareable(Integer squareable) {
		this.squareable = squareable;
	}

}
