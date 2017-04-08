import { Ticket, TicketProps, TicketInputProps } from '../interfaces';

class CachedPgTicket implements Ticket {
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

  public update(props: TicketInputProps) {
    return this.origin.update(props);
  }
}

export {
  CachedPgTicket,
}
