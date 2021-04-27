package com.ssg;

import com.google.common.base.Predicate;
import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfiguration {
    //	Swagger 설정 확인
    //	http://localhost:8000/{your-app-root}/v2/api-docs
    //	http://localhost:8000/guestbook/v2/api-docs?group=V1
    //	Swagger-UI 확인
    //	http://localhost:8080/{your-app-root}/swagger-ui.html
    //	http://localhost:8000/guestbook/swagger-ui.html

    //	http://localhost:9000/netcha/swagger-ui.html#/
    private String version = "V1";
    private String title = "SSG API " + version;

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(this.apiInfo())
                .select()
                .apis(Predicates.not(RequestHandlerSelectors.basePackage("org.springframework.boot")))
                .paths(PathSelectors.any()).build();
    }

    private Predicate<String> postPaths() {
        return PathSelectors.any();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title(title)
                .description("<h3>SSG</h3>").build();
    }
}
