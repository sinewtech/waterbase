import Service from '../Service';
import File from '../helpers/File';

class Storage extends Service {
  File = (path: string) => new File(this.client, path);
}
export = Storage;
