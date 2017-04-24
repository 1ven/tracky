export interface Tickets {
  add(props: TicketInputProps): Promise<Ticket>,
  iterate(): Promise<Ticket[]>,
}

export interface Ticket {
  read(): Promise<TicketProps>,
  remove(): Promise<void>,
  update(props: TicketInputProps): Promise<TicketProps>,
}

export type TicketInputProps = {
  title: string,
};

export type TicketProps = TicketInputProps & {
  id: number,
};

export { PgTicket } from './PgTicket';
export { PgTicketCached } from './PgTicketCached';
export { PgTickets } from './PgTickets';
