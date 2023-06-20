import React from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'flowbite-react'

export default function ResumeModal ({ openModal1, setOpenModal1 }) {
  return (
    <>
      <Modal dismissible show={openModal1} onClose={() => setOpenModal1(false)}>
        <Modal.Header>Hi There!</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              You are being redirected to my resumé, and will be leaving this page. Are you sure you want to continue?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:7c8f6761-a25e-4a1c-be8c-642dc9420c0d">
            I accept
          </Button>
          <Button color="gray" onClick={() => setOpenModal1(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

ResumeModal.propTypes = {
  openModal1: PropTypes.bool.isRequired,
  setOpenModal1: PropTypes.func.isRequired
}
