// ignore_for_file: non_constant_identifier_names, camel_case_types

import 'package:flutter/material.dart';

class currency extends StatelessWidget {
  final String name, code, amount;
  final IconData icon;
  final int order;
  final bool Inverted;

  const currency({
    super.key,
    required this.name,
    required this.code,
    required this.amount,
    required this.icon,
    required this.Inverted,
    required this.order,
  });

  final _blackColor = const Color(0xFF1F2123);
  @override
  Widget build(BuildContext context) {
    return Transform.translate(
      offset: Offset(0, (order - 1) * -30),
      child: Container(
        clipBehavior: Clip.hardEdge,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(25),
          color: Inverted ? Colors.white : _blackColor,
        ),
        child: Padding(
          padding: const EdgeInsets.all(30),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: TextStyle(
                      color: Inverted ? _blackColor : Colors.white,
                      fontSize: 32,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  Row(
                    children: [
                      Text(
                        amount,
                        style: TextStyle(
                            color: Inverted ? _blackColor : Colors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.w600),
                      ),
                      const SizedBox(
                        width: 7,
                      ),
                      Text(
                        code,
                        style: TextStyle(
                          color: Inverted
                              ? _blackColor.withOpacity(0.6)
                              : Colors.white.withOpacity(0.6),
                          fontSize: 20,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              Transform.scale(
                scale: 2.2,
                child: Transform.translate(
                  offset: const Offset(
                    -5,
                    12,
                  ),
                  child: Icon(
                    icon,
                    color: Inverted ? _blackColor : Colors.white,
                    size: 88,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
