interface Tickets {
  add(props: TicketInputProps): Promise<Ticket>,
  iterate(): Promise<Iterable<Ticket>>,
}

interface Ticket {
  read(): Promise<TicketProps>,
  remove(): Promise<void>,
  update(props: TicketInputProps): Promise<TicketProps>,
}

type TicketInputProps = {
  title: string,
};

type TicketProps = TicketInputProps & {
  id: number,
};

export {
  Tickets,
  Ticket,
  TicketInputProps,
  TicketProps,
}
