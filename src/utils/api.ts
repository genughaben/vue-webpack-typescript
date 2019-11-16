import {Post, User} from "@/types/dto";
import {API_URL} from "@/utils/consts";
import {loggerFactory} from "@/utils/loggerFactory";
import {Xhr} from "@/utils/xhr";
import {Logger} from "lines-logger";

/**
 * Http rest api
 */
export class Api {

  protected readonly logger: Logger;

  private readonly xhr: Xhr;

  constructor (xhr: Xhr) {

    this.logger = loggerFactory.getLoggerColor(
      "api",
      "red"
    );
    this.xhr = xhr;

  }

  public getPosts (): Promise<Post[]> {

    return this.xhr.doGet<Post[]>(`${API_URL}/posts`);

  }

  public getUsers (): Promise<User[]> {

    return this.xhr.doGet<User[]>(`${API_URL}/users`);

  }

}
