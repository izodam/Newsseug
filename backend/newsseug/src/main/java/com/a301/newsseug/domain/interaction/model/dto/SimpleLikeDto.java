package com.a301.newsseug.domain.interaction.model.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;

@Builder
@Schema(name = "좋아요 정보", description = "단일 기사에 노출할 좋아요 유무 및 개수 정보")
public record SimpleLikeDto(

        Boolean likeStatus,

        int likeCount

) {

    public static SimpleLikeDto of(Boolean likeStatus, int likeCount) {
        return SimpleLikeDto.builder()
                .likeStatus(likeStatus)
                .likeCount(likeCount)
                .build();
    }

}