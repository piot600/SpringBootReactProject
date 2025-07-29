package com.example.backend.controller;

import com.example.backend.entity.Note;
import com.example.backend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @GetMapping("/notes")
    public List<Note> getAllNotes() {
        List<Note> notes = noteRepository.findAll();
        return notes;
    }

}
