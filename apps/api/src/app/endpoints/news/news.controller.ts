import { Controller, Delete, Get, Param } from '@nestjs/common';

import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  public constructor(private readonly newsService: NewsService) {}

  @Get()
  public async getNews() {
    return this.newsService.getNews();
  }

  @Delete(':id')
  public async deleteNews(@Param('id') id: string) {
    return this.newsService.deleteNews(id);
  }
}
