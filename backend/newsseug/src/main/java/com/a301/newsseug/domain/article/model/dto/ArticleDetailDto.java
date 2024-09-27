package com.a301.newsseug.domain.article.model.dto;

import com.a301.newsseug.domain.article.model.entity.Article;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;

import java.time.LocalDateTime;

@Builder(access = AccessLevel.PRIVATE)
@Schema(name = "기사 상세 정보", description = "사용자가 기사 클릭 시 노출할 정보.")
public record ArticleDetailDto(

        @Schema(description = "기사 고유 식별자", examples = {"99"})
        Long id,

        @Schema(description = "기사 제목", examples = {"오늘밤 최대 150㎜ 퍼붓는다 남부·동해안 '뒤끝 폭우' 고비"})
        String title,

        @Schema(description = "원문 URL", examples = {"source-url"})
        String sourceUrl,

        @Schema(description = "영상 URL", examples = {"video-url"})
        String videoUrl,

        @Schema(description = "생성일", examples = {"20240423"})
        LocalDateTime createdAt

) {

    public static ArticleDetailDto of(Article article) {
        return ArticleDetailDto.builder()
                .id(article.getArticleId())
                .title(article.getTitle())
                .sourceUrl(article.getSourceUrl())
                .videoUrl(article.getVideoUrl())
                .createdAt(article.getCreatedAt())
                .build();
    }

}