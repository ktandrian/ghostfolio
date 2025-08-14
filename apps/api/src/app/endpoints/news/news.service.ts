import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  public getNews() {
    return {
      articles: [
        {
          title: 'Ghostfolio v2.190.0 has been released!',
          url: 'https://ghostfol.io'
        }
      ]
    };
  }

  public deleteNews(id: string) {
    // TODO: Implement delete logic
    return {
      id
    };
  }
}
