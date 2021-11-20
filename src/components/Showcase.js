import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Showcase = () => (
  <div>
    <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} />

    <FontAwesomeIcon icon="check-square" />
    With Coffee Checked, these companies always know their coffee is hot and ready!
  </div>
)