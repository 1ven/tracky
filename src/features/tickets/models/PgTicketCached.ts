import { Ticket, TicketProps, TicketInputProps } from './index';

// Rename to CachedTicket
export class PgTicketCached implements Ticket {
  private origin: Ticket;
  private props: TicketProps;

  constructor(origin: Ticket, props: TicketProps) {
    this.origin = origin;
    this.props = props;
  }

  public read() {
    return Promise.resolve(this.props);
  }

  public remove() {
    return this.origin.remove();
  }

  public rename(title: string) {
    return this.origin.rename(title);
  }
}
