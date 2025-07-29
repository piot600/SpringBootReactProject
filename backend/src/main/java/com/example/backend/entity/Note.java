package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int noteId;

    @Column(nullable = false, length = 50)
    private String noteTitle;

    @Column(length = 500)
    private String noteDescription;

    @Column(nullable = false)
    private LocalDate noteCreated;
}

