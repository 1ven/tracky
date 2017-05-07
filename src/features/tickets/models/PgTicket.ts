import { Ticket, TicketInputProps } from './index';

export class PgTicket implements Ticket {
  private cn: any;
  private id: number;

  constructor(cn, id: number) {
    this.cn = cn;
    this.id = id;
  }

  public async read() {
    return await this.cn.one(
      'SELECT * FROM tickets WHERE id = $1',
      this.id,
    );
  }

  public async remove() {
    return await this.cn.none(
      'DELETE FROM tickets WHERE id = $1',
      this.id,
    );
  }

  public async rename(title: string) {
    return await this.cn.one(
      'UPDATE tickets SET title = $2 WHERE id = $1 RETURNING *',
      [this.id, title],
    );
  }
}
