import { Controller, Get } from '@nestjs/common';

import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  public constructor(private readonly newsService: NewsService) {}

  @Get()
  public async getNews() {
    return this.newsService.getNews();
  }
}
