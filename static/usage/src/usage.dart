// ignore_for_file: unused_local_variable
import 'package:whixp/whixp.dart';

void main() {
  /* SNIPPET START */
  late Whixp whixp;

  whixp = Whixp(host: 'localhost', port: 5442, disableStartTLS: true);
  whixp.connect();
}
