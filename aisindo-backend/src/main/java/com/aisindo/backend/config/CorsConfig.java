package com.aisindo.backend.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

        @Value("${aisindo.frontend.url}")
        private String aisindoFrontendUrl;

        @Value("${aisindo.frontend.url2}")
        private String aisindoFrontendUrl2;

        @Value("${aisindo.frontend.url3}")
        private String aisindoFrontendUrl3;
        
	 @Bean
	    public CorsFilter corsFilter() {

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration config = new CorsConfiguration();
	        config.setAllowCredentials(true); // you USUALLY want this
	        config.addAllowedOrigin(aisindoFrontendUrl);
	        config.addAllowedOrigin(aisindoFrontendUrl2);
	        config.addAllowedOrigin(aisindoFrontendUrl3);
	        config.addAllowedHeader("*");
	        config.addAllowedMethod("GET");
	        config.addAllowedMethod("PUT");
	        config.addAllowedMethod("POST");
	        source.registerCorsConfiguration("/**", config);
	        return new CorsFilter(source);
	    }
}
