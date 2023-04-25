package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.entity.Hotel;
import com.demo.repository.Hotelrepository;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class Hotelcontroller {

	@Autowired
	private Hotelrepository hrepo;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insert")
	public Hotel insert(@RequestBody Hotel s1)
	{
		return hrepo.save(s1);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/update")
	public Hotel update(@RequestBody Hotel  s2)
	{
		return hrepo.save(s2);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/delete")
	public void delete(@RequestBody Hotel  s3)
	{
		 hrepo.delete(s3);
	}
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/view")
	public List<Hotel> viewrecord()
	{
		return hrepo.findAll();
	}
	
}
