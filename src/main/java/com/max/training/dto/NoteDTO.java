package com.max.training.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class NoteDTO {
    private String name;
    private String login;
}
