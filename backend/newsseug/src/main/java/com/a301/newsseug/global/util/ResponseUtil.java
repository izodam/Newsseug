package com.a301.newsseug.global.util;

import com.a301.newsseug.global.model.dto.Result;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseUtil {

    public static <T> ResponseEntity<Result<T>> ok(Result<T> result) {
        return new ResponseEntity<>(
                result,
                HttpStatus.OK
        );
    }

    public static <T> ResponseEntity<Result<T>> noContent(Result<T> result) {
        return new ResponseEntity<>(
                result,
                HttpStatus.NO_CONTENT
        );
    }

    public static <T> ResponseEntity<Result<T>> created(Result<T> result) {
        return new ResponseEntity<>(
                result,
                HttpStatus.CREATED
        );
    }

}