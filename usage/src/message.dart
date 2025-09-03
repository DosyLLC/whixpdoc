import 'dart:developer';

import 'package:whixp/whixp.dart';

late final Whixp whixp;

void main() {
  whixp = Whixp(
    jabberID: 'vsevolod@dosy.app',
    password: 'somepassword',
    port: 5223,
  );
  /* SNIPPET START */
  whixp.addEventHandler<Message>('message', (message) {
    if (message == null) return;

    final body = message.body;
    final from = message.from?.bare;
    final thread = message.thread;

    log('Message with $thread and $body is from: $from');
  });
  /* SNIPPET END */
}
